function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  const flatCollectionB = collection_b.reduce((acc, curr) => {
    return acc.concat(curr)
  }, []);

  return collection_a.filter(element => flatCollectionB.includes(element));
}

module.exports = collect_same_elements;
