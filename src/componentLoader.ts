export default function componentLoader(
  lazyComponent: any,
  attemptsLeft: number
): any {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch((error: any) => {
        console.log("attempt", attemptsLeft);
        console.log(error);
        // let us retry after 1500 ms
        setTimeout(() => {
          if (attemptsLeft === 1) {
            reject(error);
            return;
          }
          componentLoader(lazyComponent, attemptsLeft - 1).then(
            resolve,
            reject
          );
        }, 1500);
      });
  });
}
