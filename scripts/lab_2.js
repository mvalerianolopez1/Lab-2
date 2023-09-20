const buttonListener = document.getElementById("submit");
buttonListener.addEventListener("click", function() {
    const firstTextBox = document.getElementById("input1")
    const secondTextBox = document.getElementById("input2")

    var input1 = firstTextBox.value;
    var input2 = secondTextBox.value;
    var input3=$("#input3").val();

    console.log(input1)
    console.log(input2)
    console.log(input3)

    alert(input1 + '\n' + input2 + '\n' + input3)
})

$("#clear").click(function() {
    $("#input1").val("")
    $("#input2").val("")
    $("#input3").val("")
})