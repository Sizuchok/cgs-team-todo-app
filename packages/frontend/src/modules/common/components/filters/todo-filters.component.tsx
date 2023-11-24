import Button from '../button/button.component';

// eslint-disable-next-line arrow-body-style
const Filters = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px'
        // background: '#fff',
        // border: `1px solid ${COLORS.border}`,
        // borderRadius: '6px'
      }}
    >
      <Button secondary title="All" type="button" onClick={() => {}} />
      <Button secondary title="Private" type="button" onClick={() => {}} />
      <Button secondary title="Public" type="button" onClick={() => {}} />
      <Button secondary title="Completed" type="button" onClick={() => {}} />
    </div>
  );
};
export default Filters;
