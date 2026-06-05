// 并行
function fetchUser(id: number): Promise<{ id: number; name: string}>{
    return Promise.resolve({ id, name: `User${id}` });
}
async function main(){
    console.time("串行");
    let user1 = await fetchUser(1);
    let user2 = await fetchUser(2);
    console.timeEnd("串行");
    
    console.time("并行");
    let results = await Promise.all([fetchUser(1), fetchUser(2)]);
    console.timeEnd("并行");
}
main();