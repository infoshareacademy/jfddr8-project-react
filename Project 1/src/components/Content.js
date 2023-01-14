import { UsersData } from '../data/users-data';
import { Users } from './Users';

export function Content() {
    return <div className="content">
      <Users usersList={UsersData}/>
      </div>;
  }