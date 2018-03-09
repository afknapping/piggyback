# piggyback

## Vision

> piggyback provides an adhoc, zero-config, encrypted interface for communication and collaboration that does not depoend on central services from the internet.
> it uses peer-to-peer technology via the local network to offer chat, filetransfer and a whiteboard.
> example usecases are: attendees of a conference, refugees in a camp, or neighbors in a city-block.

---

## Development

### `npm start`

- starts a [git daemon](https://gist.github.com/datagrok/5080545)
- serves the npm cache (currently not in use because flakey)
- serves a tarball of `node_modules`
- starts electron
- generates info on how to clone and pull for peers

⚠️ You do not need a second computer to test the p2p dev mode this, a second terminal will do :) ⚠️

![image](https://user-images.githubusercontent.com/170145/36355766-706b856c-14e8-11e8-82ff-290d751d5568.png)
