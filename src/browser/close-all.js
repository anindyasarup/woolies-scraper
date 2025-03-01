export const closeAll = async resources => {
    const closed = await Promise.allSettled(resources.map(x => x.close()));
    return closed.filter(object => object.status === 'rejected');
};
