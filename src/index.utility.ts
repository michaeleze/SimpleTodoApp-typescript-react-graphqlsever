export const formatList = (item: any) => {
    const entries = Object.values(item).reduce((acc, value) => {
        // @ts-ignore
        acc.push(value);

        return acc;
    }, [])

    return entries;
}