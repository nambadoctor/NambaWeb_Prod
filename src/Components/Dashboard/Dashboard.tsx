import { Component, ChangeEvent, FC } from "react";
import getUserType from "../../Services/Common/GetUserTypeService"
type Props = {}

type State = {
  temp:string
}


export default class Dashboard extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    //BIND FUNCTIONS WITH STATE
    this.getUserTypeCaller = this.getUserTypeCaller.bind(this);

    //SET INITIAL VALUES IN STATE
    this.state = {
      temp: "",
    };
  }

  componentDidMount() {
      console.log("Hitting Here");
      getUserType();
  }

  getUserTypeCaller() {

  }

  render() {

    return (
      <div className="">
          HEY BRO
      </div>
    );
  }
}