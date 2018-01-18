Code for Work, code for FUN. Code is making mylife better.
function drawThumb() {
    let i = 0;
    while (i < 15) {
        if (i == 0) {
            console.log('  ******');
        } else if (i < 6) {
            console.log('  *    *');
        } else if (i % 2 === 0 && i !== 6) {
            console.log('*                              *');
        } else if (i % 2 === 1) {
            console.log('*     **************************');
        } else {
            console.log('***    *');
        }
        i++;
    }
    console.log('********************************');

}
drawThumb();
