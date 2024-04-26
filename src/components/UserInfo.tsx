import React, { useState } from "react";
import { IUser } from "../types";

type IProps = IUser;

function UserInfo({ user }: IProps): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{user?.name}</td>
          <td>{user?.phone}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserInfo;
