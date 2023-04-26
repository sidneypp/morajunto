/* eslint-disable no-prototype-builtins */
import { useResetCache } from "@hooks";
import {
  ListSubheader,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  HTMLAttributes,
  ReactChild,
  createContext,
  forwardRef,
  useContext,
} from "react";
import { ListChildComponentProps, VariableSizeList } from "react-window";

const LISTBOX_PADDING = 8;

export const VirtualListContext = createContext({});

// eslint-disable-next-line react/display-name
const OuterElementType = forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = useContext(VirtualListContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const dataSet = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };

  if (dataSet.hasOwnProperty("group")) {
    return (
      <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
        {dataSet.group}
      </ListSubheader>
    );
  }

  return (
    <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
      {dataSet[1]}
    </Typography>
  );
}

export const VirtualListProvider = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLElement>
>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData: ReactChild[] = [];
  (children as ReactChild[]).forEach(
    (item: ReactChild & { children?: ReactChild[] }) => {
      itemData.push(item);
      itemData.push(...(item.children || []));
    }
  );

  const theme = useTheme();
  const smUp = useMediaQuery(theme.breakpoints.up("sm"), {
    noSsr: true,
  });
  const itemCount = itemData.length;
  const itemSize = smUp ? 36 : 48;

  const getChildSize = (child: React.ReactChild) => {
    if (child.hasOwnProperty("group")) {
      return 48;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <VirtualListContext.Provider value={other}>
        <VariableSizeList
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          ref={gridRef}
          outerElementType={OuterElementType}
          innerElementType="ul"
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemCount}
        >
          {renderRow}
        </VariableSizeList>
      </VirtualListContext.Provider>
    </div>
  );
});

export default VirtualListProvider;
