import BadgeType from './BadgeType';

const Badge = ({ type, children }) => {
  const getClass = () => {
    switch (type) {
      case BadgeType.SUCCESS:
        return 'bg-green-200 text-green-900';
      case BadgeType.PURPLE:
        return 'bg-purple-200 text-purple-900';

      default:
        return '';
    }
  };

  return <span className={`${getClass()} text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}>{children}</span>;
};

export default Badge;
