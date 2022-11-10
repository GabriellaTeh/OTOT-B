import PostRequest from './components/PostRequest'
import GetRequest from './components/GetRequest'
import PutRequest from './components/PutRequest';
import DeleteRequest from './components/DeleteRequest';

function App() {
  return (
    <div>
      <h1>B3</h1>
      <GetRequest />
      <PostRequest />
      <PutRequest />
      <DeleteRequest />
    </div>
  )
}

export default App;
