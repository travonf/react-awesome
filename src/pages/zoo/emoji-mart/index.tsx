import React from 'react';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

const EmojiMart = () => {
  const addEmoji = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <Picker
        set="apple"
        onSelect={addEmoji}
        title="Pick you emoji..."
        emoji="point_up"
        // style={{ position: 'absolute', bottom: '20px', right: '20px' }}
        i18n={{
          search: 'Recherche',
          categories: { search: 'search', recent: 'recent' },
        }}
      />
    </div>
  );
};

export default EmojiMart;
