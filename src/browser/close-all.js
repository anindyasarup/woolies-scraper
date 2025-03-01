export const closeAll = async (args) => {
    const closed = await Promise.allSettled(args.map(x => x.close()));
    return closed.filter(object => object.status === 'rejected');
};
