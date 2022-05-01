import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Characters } from './Character';
import { API_URL } from '../../constants';
import { apiCall } from '../../service';
import { StyledLink } from '../../components/StyledLink.style';

interface IState {
  names: string;
}

export function Homepage() {
  const [names, setNames] = useState<IState[]>([]);
  React.useEffect(() => {
    apiCall(API_URL.users).then((data: any) => {
      const users = data.results;
      let temp: any = [];
      users.forEach((user: any) => {
        temp.push(user.name);
      });
      setNames(temp);
    });
  });

  return (
    <div className="App">
      <h1>Characters</h1>
      {names.map((name: any) => {
        return (
          <div className="App">
            <h3>
              <StyledLink to={'/' + (names.indexOf(name) + 1)}>{name}</StyledLink>
            </h3>
          </div>
        );
      })}
    </div>
  );
}
