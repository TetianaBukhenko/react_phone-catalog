import classNames from 'classnames';
import { ProductGeneral } from '../types/ProductGeneral';
import { ErrorText } from '../constants/errorText';
import { dots } from '../constants/dots';
import { CartItem } from '../types/CartItem';

export const getItemsPerScroll = (width: number) => {
  if (width > 1020) {
    return 4;
  } else if (width > 773) {
    return 3;
  } else if (width > 464) {
    return 2;
  } else {
    return 1;
  }
};

export const getButtonSecondaryClass = (darkTheme: boolean) =>
  classNames(`button button--secondary`, {
    'button--secondary-darkTheme': darkTheme,
  });

export const getButtonMainClass = (darkTheme: boolean) =>
  classNames(`button button--main`, {
    'button--main-darkTheme': darkTheme,
  });

export const getCatagoryNameANDError = (category: string) => {
  switch (category) {
    case 'tablets':
      return { name: 'Tablets', errorText: ErrorText.noTablets };
    case 'phones':
      return { name: 'Mobile phones', errorText: ErrorText.noPhones };
    default:
    case 'accessories':
      return { name: 'Accessories', errorText: ErrorText.noAccessories };
  }
};

export const getButtonValue = (
  value: string | number,
  index: number,
  visibleButtons: (string | number)[],
  selectedPage: number,
) => {
  const previousValue = visibleButtons[index - 1];
  const nextValue = visibleButtons[index + 1];

  if (typeof value === 'number') {
    return value;
  }

  switch (value) {
    case dots.start:
      return +previousValue + 1;

    case dots.end:
      return +nextValue - 1;

    default:
      return selectedPage;
  }
};

export const getCountOf = {
  itemsInCart(
    addedItems: ({ item: ProductGeneral; count: number } | CartItem)[],
  ) {
    return addedItems.reduce((prev, { count }) => prev + count, 0);
  },

  sumInCart(
    addedItems: {
      item: ProductGeneral;
      count: number;
    }[],
  ) {
    return addedItems.reduce((prev, { item, count }) => {
      const price = item.price * count;

      return prev + price;
    }, 0);
  },
};
