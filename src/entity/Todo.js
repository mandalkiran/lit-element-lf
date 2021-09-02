/**
 * Convert object structure to JSON payload.
 *
 * @param {Object} todo
 *
 * @returns {Object}
 */
export function toJson({ title } = {}) {
  return Object.freeze({
    data: { title }
  });
}

/**
 * Convert Data from datasource to entity property
 *
 * @property title
 *
 * @returns {Object}
 */
export function fromJson({ title, id }) {
  const encoded = {
    id,
    title,   //helpful if the property name is different than one used in entity/components
  };

  return {
    ...encoded,
  };
}
