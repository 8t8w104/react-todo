import React, { useEffect, useState } from 'react'

const List = ({ todoData, sendRegister }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (todoData && Object.keys(todoData).length > 0) {
      setTodoList((prevTodoList) => {
        const existingIndex = prevTodoList.findIndex(item => item.index === todoData.index);
        if (existingIndex !== -1) {
          // indexが存在する場合、その要素を更新
          return prevTodoList.map((item, index) =>
            index === existingIndex ? { ...item, ...todoData } : item
          );
        } else {
          // indexが存在しない場合、追加

          // ↓動作する
          return [...prevTodoList, { ...todoData, index: prevTodoList.length + 1 }];
          // ↓動作しない
          // return [...prevTodoList, { ...todoData, index: prevTodoList.length }];
        }
      });

    }
  }, [todoData])

  const deleteTodo = (index) => {
    const result = window.confirm("削除します。元に戻せないですが本当に削除しますか？");
    if (result) {
      setTodoList((prevTodoList) => prevTodoList.filter(todo => todo.index !== index));
    }
  }

  const sort = (key) => {
    setTodoList((prevTodoList) => {
      const ss = [...prevTodoList].sort((a, b) => a.index - b.index);
      console.log(ss);
      return ss;
    });
  }

  return (
    <>
      <div className="ui container">
        <h2 className="ui header">検索結果一覧コンポーネント</h2>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th onClick={() => sort('index')} >index</th>
              <th>タイトル</th>
              <th>ステータス</th>
              <th>詳細</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {todoList.map((todo, index) => (
              <tr key={index} >
                <td>{todo.index}</td>
                <td>{todo.title}</td>
                <td>{todo.status}</td>
                <td>{todo.detail}</td>
                <td><button onClick={() => sendRegister(todo)} >入力欄へ反映</button></td>
                <td><button onClick={() => deleteTodo(todo.index)} >削除する</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default List;
