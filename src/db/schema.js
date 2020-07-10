import Realm from 'realm';

export const Comments = {
  name: 'Comments',
  primaryKey: 'uuid',
  properties: {
    uuid: 'string',
    body: 'string',
    postId: 'int?',
    is_synced: {type: 'bool', default: false},
    timestamp: 'date',
  },
};

const db = {
  path: 'insyt.realm',
  schema: [Comments],
  deleteRealmIfMigrationNeeded: true,
};

//crud operations
export const createOne = (model, body) =>
  new Promise((resolve, reject) => {
    Realm.open(db)
      .then(realm => {
        realm.write(() => {
          realm.create(model, body);
          resolve(body);
        });
      })
      .catch(error => reject(error));
  });

export const getMany = model =>
  new Promise((resolve, reject) => {
    Realm.open(db)
      .then(realm => {
        let docs = realm.objects(model);
        resolve(docs);
      })
      .catch(error => reject(error));
  });

export const getOne = (model, uuid) =>
  new Promise((resolve, reject) => {
    Realm.open(db)
      .then(realm => {
        let doc = realm.objectForPrimaryKey(model, uuid);
        resolve(doc);
      })
      .catch(error => reject(error));
  });

export const updateOne = (type, properties, mode) =>
  new Promise((resolve, reject) => {
    Realm.open(db)
      .then(realm => {
        realm.write(() => {
          realm.create(type, properties, mode);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const removeOne = (model, uuid) =>
  new Promise((resolve, reject) => {
    Realm.open(db)
      .then(realm => {
        realm.write(() => {
          let removed = realm.objectForPrimaryKey(model, uuid);
          realm.delete(removed);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const removeAll = model =>
  new Promise((resolve, reject) => {
    Realm.open(db)
      .then(realm => {
        realm.write(() => {
          let removed = realm.objects(model);
          realm.delete(removed);
          resolve();
        });
      })
      .catch(error => reject(error));
  });

export const realm = new Realm(db);
//console.log(realm.path);
