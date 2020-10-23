function main()
{
    const START = 1;
    const STOP = 100;

    for (lcv = START; lcv <= STOP; ++lcv) {
        if (lcv % 15 === 0)
            alert(lcv)
    }
}