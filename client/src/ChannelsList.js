import React from 'react';

// pure function that takes in props with data key
export const ChannelsList = ({ data: {loading, error, channels }}) => {
  if (loading) {
    return <p>Loading ... </p>
  } else if (error) {
    return <p>{error.message}</p>
  }

  return (
    <ul>
      { channels.map( ch => <li key={ch.id}> {ch.name} </li>) }
    </ul>
  );
};

export default ChannelsList
