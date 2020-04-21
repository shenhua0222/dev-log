calculate(1000 * 60)
function calculate(time) {
   let start = Date.now()
   let i = 0
   while (Date.now() - start < time) {
     console.log(Date.now(), '⬇');
     i++
   }
   console.log('---------------  final result = ', i)
}