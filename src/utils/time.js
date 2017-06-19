import moment from 'moment';
import React from 'react';

export const getElapsedTime = (timestamp) => moment(timestamp).fromNow();

export const formatTimeCell = (timestamp, url) =>
  (timestamp ? (
    url ?
    <td><a href={url} target="_blank">{getElapsedTime(timestamp)} <span className="fa fa-check-circle" /></a></td> :
    <td>{getElapsedTime(timestamp)} <span className="fa fa-check-circle" /></td>
    ) :
    <td> - </td>
  );

export const getLatest = (...args) => {
  const filtered = args.filter((a) => a);
  if (filtered.length === 0) return null;
  return filtered.sort((a, b) => b > a)[0];
}