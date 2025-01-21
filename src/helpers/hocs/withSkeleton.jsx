import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton(Component, type, count) {
  return function WithSkeleton(props) {
    // eslint-disable-next-line react/prop-types
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />
    }
    return <Component {...restProps} />
  }
}

export default withSkeleton;