import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead>
      <tr className={css.tableHead}>
        <th className={css.tableHeader}>Type</th>
        <th className={css.tableHeader}>Amount</th>
        <th className={css.tableHeader}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={css.tableRow}>
          <td className={css.tableData}>{type}</td>
          <td className={css.tableData}>{amount}</td>
          <td className={css.tableData}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
