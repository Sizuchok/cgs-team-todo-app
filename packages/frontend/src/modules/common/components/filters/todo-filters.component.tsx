import Button from '../button/button.component';

// eslint-disable-next-line arrow-body-style
const Filters = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Button title="All" type="button" onClick={() => {}} />
      <Button title="Private" type="button" onClick={() => {}} />
      <Button title="Public" type="button" onClick={() => {}} />
      <Button title="Completed" type="button" onClick={() => {}} />
    </div>
  );
};
export default Filters;
