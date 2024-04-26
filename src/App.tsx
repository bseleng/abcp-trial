// Мы ожидаем, что Вы исправите синтаксические ошибки, сделаете перехват возможных исключений и улучшите читаемость кода.
// А так же, напишите кастомный хук useThrottle и используете его там где это нужно.
// Желательно использование React.memo и React.useCallback там где это имеет смысл.
// Будет большим плюсом, если Вы сможете закэшировать получение случайного пользователя.
// Укажите правильные типы.
// По возможности пришлите Ваш вариант в https://codesandbox.io

import React, { useState } from "react";

import Button from "./components/Button";
import UserInfo from "./components/UserInfo";
import { getRandomUser } from "./api/user";
import { BASE_URL, USER_ENDPOINT } from "./constants";
import { getRandomNumber } from "./utils";
import { IUser } from "./types";

function App(): JSX.Element {
  const [item, setItem] = useState<Record<number, IUser> | null>(null);

  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const id = getRandomNumber(10);
    const user = getRandomUser(BASE_URL, USER_ENDPOINT, id);
    setItem(user);
  };

  return (
    <div>
      <header>Get a random user</header>
      <Button onClick={handleButtonClick} />
      <UserInfo user={item} />
    </div>
  );
}

export default App;
