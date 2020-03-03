$(init);


function init()
{
    cloneDragMe();

    $(".dragMe").draggable();
    $("#target").droppable();

    $("#target").bind("drop",    highlightTarget);
    $("#target").bind("dropout", resetTarget);
}

