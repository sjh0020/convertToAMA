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
document.querySelector('#copy').onclick = copyText;

function generateAMA() {
    let copyTxt = document.querySelector('#copy')
    copyTxt.classList.remove("disable")
}

function copyText() {
    let text = document.getElementById("result").innerHTML;
    console.log(text);
    let input = document.getElementById("input");
    input.value = text;
    input.select();//选中文本
    document.execCommand("copy");
}