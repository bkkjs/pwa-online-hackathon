import moment from 'moment';
import React from 'react';

export const getElapsedTime = (timestamp) => moment(timestamp).fromNow();

export const formatTimeCell = (timestamp, url, additionalMessage) =>
  (timestamp ? (
    url ?
    <td><a href={url} target="_blank">{getElapsedTime(timestamp)}</a></td> :
    <td>{getElapsedTime(timestamp)}
      {additionalMessage && <br />}
      {additionalMessage && <span style={{fontSize: '11px', lineHeight: '10px'}}>{additionalMessage}</span>}</td>
    ) :
    <td> <a href={url} target="_blank">-</a> </td>
  );

export const getLatest = (...args) => {
  const filtered = args.filter((a) => a);
  if (filtered.length === 0) return null;
  return filtered.sort((a, b) => b > a)[0];
}