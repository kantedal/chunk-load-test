export default function retry(
  fn: () => Promise<{
    default: React.ComponentType<any>;
  }>,
  retriesLeft = 100,
  interval = 1000
) {
  return new Promise<{
    default: React.ComponentType<any>;
  }>((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error: any) => {
        console.log("error here");
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retry(fn, interval, retriesLeft - 1).then(resolve, reject);
        }, interval);
      });
  });
}
