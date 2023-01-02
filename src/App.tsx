import React, { FormEvent, useMemo, useState } from 'react';
import { Stack, DefaultButton, TextField, Text } from '@fluentui/react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

export const App: React.FunctionComponent = () => {
   const [nameValue, setNameValue] = useState<string>();
   const [mailValue, setMailValue] = useState<string>();
   const [users, setUsers] = useState<any[]>([]);
   const [fuser, setfuser] = useState<any[]>([]);
   const reduxId = useSelector((state) => state);
   const dispatch = useDispatch();

   const onClickSetState = (name?: string, mail?: string) => {
      let listColumns2 = [];
      listColumns2.push({ key: name!, name: mail! });
      setfuser(listColumns2);
      dispatch({ type: 'insertId' });
 
      let listColumns = [];
      listColumns = users;
      listColumns.push({ key: name!, name: mail! });
      setUsers(listColumns);
   };

   const onClickSetState2 = (name?: string, mail?: string) => {
      const key = fuser.find((element) => element.key).key;
      console.log(key)
     
   };

   const usersList = useMemo(() => {
      return (
         <>
            {reduxId != 1 && <Text>{reduxId} : 추가 횟수</Text>}
            <br></br>
            {users.length > 0 && <Text>계정명 / 메일명</Text>}
            {users.map((element: any, index: number) => {
               return (
                  <Stack.Item key={index}>
                     {element.key} / {element.name}
                  </Stack.Item>
               );
            })}
         </>
      );
   }, [fuser, reduxId]);

   return (
      <Stack horizontalAlign="start" verticalAlign="start">
         <Stack horizontal>
            <TextField
               placeholder="계정명"
               onChange={(event?: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
                  setNameValue(newValue)
               }
            />
            <TextField
               placeholder="메일명"
               onChange={(event?: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) =>
                  setMailValue(newValue)
               }
            />
            <DefaultButton text="추가" onClick={() => onClickSetState(nameValue, mailValue)}></DefaultButton>
            <DefaultButton text="삭제" onClick={() => onClickSetState2(nameValue, mailValue)}></DefaultButton>
         </Stack>
         <Stack.Item>{usersList}</Stack.Item>
      </Stack>
   );
};
