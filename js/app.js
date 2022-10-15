// document.querySelector('#test').onclick = getAuthorNames;

// function getAuthorNames() {
//     let authorNames = document.querySelector('#authorNames').value;
//     authorNames = authorNames.replaceAll("\n", ","); // 文本处理，取消换行
//     authorNames = authorNames.replaceAll("，", ",");
//     authorNames = authorNames.replaceAll(",", ", ");
//     authorNames = authorNames.replaceAll("  ", " ");
//     // alert(authorNames);
// }
import { pinyin } from ('pinyin-pro');
document.querySelector('#generate').onclick = generateAMA;
document.querySelector('#copy').onclick = copyText;

function generateAMA() {
    let btn = document.querySelector('#copy')
    btn.classList.remove("disable")
}
/* // execCommand方法
function copyText() {
    let range = document.createRange();
    const aa = document.getElementById('result');  // 这里是你要选择复制的文本dom节点
    window.getSelection().removeAllRanges();
    range.selectNode(aa);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}
*/
/* // clipboard.write方法
navigator.clipboard.write([new ClipboardItem({'text/html': new Blob([document.getElementById('result').innerHTML,], {type: 'text/html',}),}),]);
*/
function copyText() {
    let range = document.createRange();
    window.getSelection().removeAllRanges();
    range.selectNode(document.getElementById('result'));// 这里是你要选择复制的文本dom节点
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    console.log('Copiled!');
}
