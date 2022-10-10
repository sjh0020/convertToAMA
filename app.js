// document.querySelector('#test').onclick = getAuthorNames;

// function getAuthorNames() {
//     let authorNames = document.querySelector('#authorNames').value;
//     authorNames = authorNames.replaceAll("\n", ","); // 文本处理，取消换行
//     authorNames = authorNames.replaceAll("，", ",");
//     authorNames = authorNames.replaceAll(",", ", ");
//     authorNames = authorNames.replaceAll("  ", " ");
//     // alert(authorNames);
// }
document.querySelector('#generate').onclick = generateAMA;
// document.querySelector('#copy').onclick = copyText;
document.querySelector('#copy').onclick = async () => {
    // let copyTxt =document.getElementById('result').innerHTML;
    // console.log(copyTxt);
    await navigator.clipboard.write(new ClipboardItem({'text/html': new Blob([this.document.getElementById('result').innerHTML],{type: 'text/html',}),}));
}

function generateAMA() {
    let btn = document.querySelector('#copy')
    btn.classList.remove("disable")
}
/*
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
async function copyText() {
    // let copyTxt = 'Makar AB, McMartin KE, Palese M, Tephly TR. Formate assay in body fluids: application in methanol poisoning. <i>Biochem Med</i>. 1975;13(2):117-126. doi:10.1016/0006-2944(75)90147-7';
    let copyTxt =document.getElementById('result').innerHTML;
    console.log(copyTxt);
    await navigator.clipboard.write(new ClipboardItem({'text/html': new Blob([this.copyTxt],{type: 'text/html',}),}));
}