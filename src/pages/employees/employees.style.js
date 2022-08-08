import styled from "styled-components";

export const EmployeesContainer = styled.div`
  width: 100%;
  height: max-height;
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0 0 0 4%;
  }
`;
export const EmployeesWrapper = styled.div`
  background-color: #d2d5da;
  width: 90%;
  height: max-height;
  margin: 30px 0 50px 8%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    margin: 20px 0 0 70px;
  }
  .rowDiv {
    display: flex;
    width: 95%;
    justify-content: space-between;
  }
  .inputBox {
    border: 1px solid #000000;
    border-radius: 4px;
    margin: 12px 0 12px 0;
    width: 100%;
    height: 48px;
  }
  .inputDiv {
    // background-color:red;
    width: 48%;
  }
  .inputRegister {
    border: 1px solid #000000;
    border-radius: 6px;
    margin: 12px 0 20px 0;
    height: 40px;
    width: 95%;
  }
  .submitButton {
    width: 15%;
    height: 40px;
    background-color: #000000;
    border: none;
    border-radius: 4px;
    color: white;
    margin: 30px 5% 50px 0;
    align-self: flex-end;
    &:hover {
      background-color: white;
      color: #000000;
      border: 1px solid #000000;
    }
  }
  label {
    padding-bottom: 12px;
  }
  .radioDiv {
    margin: 10px 0 10px 0;

    .genderTitle {
      /* font-weight: 700; */
    }
  }
  .radio {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    margin: 10px 0 0 0;

    input {
      margin-left: 25px;
    }

    #male {
      margin-left: 50px;
    }
  }
  .radioInputLabel {
    margin: 10px 0 0 5px;
  }
  @media screen and (max-width: 426px) {
    margin: 30px 0 50px 5%;
    .rowDiv {
      display: flex;
      flex-direction: column;
    }
    .inputDiv {
      width: 100%;
    }
    form {
      margin: 20px 0 0 5%;
    }
    .submitButton {
      margin: 10px 5% 50px 0;
    }
    .radio {
      width: 50%;
    }
  }
  @media screen and (max-width: 769px) {
    margin: 30px 0 50px 5%;
    .submitButton {
      width: 40%;
    }
  }
`;
