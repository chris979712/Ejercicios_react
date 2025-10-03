import { FollowMouse } from "./Components/FollowMouse";
import {FollowMouseUsability} from './logic/FollowMouse'

function App() {  

  const {enabled, position, ChangeEnabledState} = FollowMouseUsability();

  return (
    <main>
      <FollowMouse ChangeEnabledState={ChangeEnabledState} enabled={enabled} positionX={position.x} positionY={position.y}/>
    </main>
  );
}

export default App;
