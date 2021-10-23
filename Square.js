var dimension = 10;
    var edge = '*';
    var inside = ' ';
    var printLine;

    for (var i = 1; i <= dimension; i++) {
        if (i === 1 || i === dimension) {
            printLine = Array(dimension + 1).join(edge);
        } else {
            printline = edge + Array(dimension - 1).join(inside) + edge;
        }
        console.log(printLine);
        print(console.log)
    }
