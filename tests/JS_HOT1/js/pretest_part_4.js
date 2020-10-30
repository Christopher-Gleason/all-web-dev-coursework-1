function main()
{
    const START = 1;
    const STOP = 100;

    for(let lcv = START; lcv <= STOP; ++lcv)
    {
        if (lcv % 2 !== 0) {
            alert(lcv)
        }
    }
}