import * as React from 'react';
import { FocusZone, FocusZoneDirection } from '@fluentui/react/lib/FocusZone';
import { TextField } from '@fluentui/react/lib/TextField';
import { Image, ImageFit } from '@fluentui/react/lib/Image';
import { List } from '@fluentui/react/lib/List';
import { classNames } from '../../src/Styles/css';
import { DataApi } from '../../src/DataLayer/DataAccess';
import { Movie } from '../Models/MovieModel';
import { useEffect } from 'react';

const _dataAccess: DataApi = new DataApi();

const onRenderCell = (item: any | undefined, index: number | undefined): JSX.Element => {
  return (
    <div className={classNames.itemCell} data-is-focusable={true}>
      <Image className={classNames.itemImage} src={item && item.Stills ? item.Stills[0] : undefined} width={50} height={50} imageFit={ImageFit.cover} />
      <div className={classNames.itemContent}>
        <div className={classNames.itemName}>{item ? item.Title : undefined}</div>
        <div>{item ? item.Plot : undefined}</div>
      </div>
    </div>
  );
};

var originalItems: Movie[] = [];

export const Listview: React.FunctionComponent = () => {  
  
  useEffect(() => {
    _dataAccess.getAllMovies().then((result: any) =>{
      originalItems = JSON.parse(result);
      setItems(originalItems);
    })
  }, []);
  
  const [items, setItems] = React.useState(originalItems);

  const onFilterChanged = (_: any, text: any): void => {
    setItems(originalItems.filter(item => item.Title.toLowerCase().indexOf(text.toLowerCase()) >= 0));
  };

  return (
    <FocusZone direction={FocusZoneDirection.vertical}>
      <TextField
        label={'Filter by title' }
        onChange={onFilterChanged}
      />
      <List items={items} onRenderCell={onRenderCell} />
    </FocusZone>
  );
};
