import React, { FormEvent, useMemo, useState } from 'react';
import { Stack, SearchBox, DefaultButton, TextField, DetailsList, Text, IColumn } from '@fluentui/react';
import './App.css';

export const App: React.FunctionComponent = () => {
   const [nameValue, setNameValue] = useState<string>();
   const [mailValue, setMailValue] = useState<string>();
   const [users, setUsers] = useState<any[]>([]);
   const [fuser, setfuser] = useState<any[]>([]);
   const onClickSetState = (name?: string, mail?: string) => {
      let listColumns2 = [];
      listColumns2.push({ key: name!, name: mail! });
      setfuser(listColumns2);

      let listColumns = [];
      listColumns = users;
      listColumns.push({ key: name!, name: mail! });
      setUsers(listColumns);
   };

   const usersList = useMemo(() => {
      return (
         <>
            {users.map((element: any, index: number) => {
               return <Stack.Item key={index}>{element.key}</Stack.Item>;
            })}
         </>
      );
   }, [fuser]);

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
         </Stack>
         <Stack.Item>{usersList}</Stack.Item>
      </Stack>
   );
};
