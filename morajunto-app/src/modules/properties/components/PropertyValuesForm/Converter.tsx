export function valueLabelFormat(value: number) {
  switch (value) {
    case 0:
      return "Sem Estadia Mínima";
    case 7:
      return "Uma semana";
    case 14:
      return "Quinze Dias";
    case 21:
      return "Um Mês";
    case 28:
      return "Dois Mês";
    case 35:
      return "Três Mês";
    case 42:
      return "Quatro Mês";
    case 49:
      return "Cinco Mês";
    case 56:
      return "Seis Mês";
    case 63:
      return "Sete Mês";
    case 70:
      return "Oito Mês";
    case 77:
      return "Nove Mês";
    case 84:
      return "Dez Mês";
    case 91:
      return "Onze Mês";
    case 98:
      return "Um Ano";
    case 100:
      return "Mais de um Ano";
    default:
      return "";
  }
}

export function convertStay(value: number) {
  const valueMonth = 30;
  switch (value) {
    case 0:
      return value;
    case 7:
      return value;
    case 14:
      return 15;
    case 21:
      return valueMonth * 1;
    case 28:
      return valueMonth * 2;
    case 35:
      return valueMonth * 3;
    case 42:
      return valueMonth * 4;
    case 49:
      return valueMonth * 5;
    case 56:
      return valueMonth * 6;
    case 63:
      return valueMonth * 7;
    case 70:
      return valueMonth * 8;
    case 77:
      return valueMonth * 9;
    case 84:
      return valueMonth * 10;
    case 91:
      return valueMonth * 11;
    case 98:
      return valueMonth * 12;
    case 100:
      return valueMonth * 13;
    default:
      return 0;
  }
}

export function revertStay(value?: number) {
  const valueMonth = 30;
  switch (value) {
    case 0:
      return value;
    case 7:
      return value;
    case 15:
      return 14;
    case valueMonth * 1:
      return 21;
    case valueMonth * 2:
      return 28;
    case valueMonth * 3:
      return 35;
    case valueMonth * 4:
      return 42;
    case valueMonth * 5:
      return 49;
    case valueMonth * 6:
      return 56;
    case valueMonth * 7:
      return 63;
    case valueMonth * 8:
      return 70;
    case valueMonth * 9:
      return 77;
    case valueMonth * 10:
      return 84;
    case valueMonth * 11:
      return 91;
    case valueMonth * 12:
      return 98;
    case valueMonth * 13:
      return 100;
    default:
      return 0;
  }
}
