const formatMoney = (amount) => {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  // check if its a clean dollar amount

  if (amount % 100 == 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-us', options);
  return formatter.format(amount / 100);
};

export default formatMoney;
