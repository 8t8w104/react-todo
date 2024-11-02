import { useState, useEffect } from 'react';

const Register = ({ onSubmit, loadTodo }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [status, setStatus] = useState('未対応');
  const [index, setIndex] = useState(-1);
  const [statusDisabled, setStatusDisabled] = useState(true);

  const STATUS_OPTIONS = [
    '未対応',
    '完了',
  ]

  useEffect(() => {
    if (loadTodo && Object.keys(loadTodo).length > 0) {
      setTitle(loadTodo?.title || '');
      setStatus(loadTodo?.status || '未対応');
      setDetail(loadTodo?.detail || '');
      setIndex(loadTodo?.index || -1);
      setStatusDisabled(false);
    }
  }, [loadTodo])

  const submitTodoForm = (event) => {
    event.preventDefault();
    onSubmit(event, { title, detail, status, index })

    // フォームの状態をクリア
    setTitle('');
    setStatus('未対応');
    setDetail('');
    setIndex(-1);
    setStatusDisabled(true);
  }


  return (
    <div className="ui container">
      <h2 className="ui header">TODO登録コンポーネント</h2>
      <form className="ui form" onSubmit={submitTodoForm} >
        <div>index={index}</div>
        <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="タイトル" value={title} />
        <input name="detail" type="text" onChange={(e) => setDetail(e.target.value)} placeholder="詳細" value={detail} />
        <select
          name="status"
          disabled={statusDisabled}
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
          {STATUS_OPTIONS.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input type="submit" value="登録or更新" />
      </form>
    </div>
  )
}

export default Register;
