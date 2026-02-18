import Metronome from '@metronome/sdk';

const client = new Metronome();

/**
 * Add a custom field key.
 *
 * Creates a new custom field key that can be used on the specified
 * entity type. Set enforce_uniqueness to true to ensure no two
 * entities of that type share the same value for this key.
 *
 */
async function addKey(): Promise<void> {
  await client.v1.customFields.addKey({
    enforce_uniqueness: true,
    entity: 'customer',
    key: 'x_account_id',
  });

  console.log('Custom field key added');
}

/**
 * Delete custom field values from an entity.
 *
 * Removes specific custom field values from an entity instance.
 * The key itself remains available for future use.
 *
 */
async function deleteValues(): Promise<void> {
  await client.v1.customFields.deleteValues({
    entity: 'customer',
    entity_id: '99594816-e8a5-4bca-be21-8d1de0f45120',
    keys: ['x_account_id'],
  });

  console.log('Custom field values deleted');
}

/**
 * List all custom field keys.
 *
 * Retrieves all active custom field keys, optionally filtered
 * by entity type. Returns key names and their uniqueness settings.
 *
 */
async function listKeys(): Promise<void> {
  for await (const key of client.v1.customFields.listKeys({
    entities: ['customer'],
  })) {
    console.log('Custom field key:', key);
  }
}

/**
 * Remove a custom field key from the allowlist.
 *
 * Removes the key so it can no longer be set on new entities.
 * Existing values for this key remain on their entities.
 *
 */
async function removeKey(): Promise<void> {
  await client.v1.customFields.removeKey({
    entity: 'customer',
    key: 'x_account_id',
  });

  console.log('Custom field key removed');
}

/**
 * Set custom field values on an entity.
 *
 * Associates key-value pairs with a specific entity instance.
 * Multiple fields can be set in a single call.
 *
 */
async function setValues(): Promise<void> {
  await client.v1.customFields.setValues({
    custom_fields: { x_account_id: 'KyVnHhSBWl7eY2bl' },
    entity: 'customer',
    entity_id: '99594816-e8a5-4bca-be21-8d1de0f45120',
  });

  console.log('Custom field values set');
}

// --- Run examples ---
async function main(): Promise<void> {
  await addKey();
  await deleteValues();
  await listKeys();
  await removeKey();
  await setValues();
}

main().catch(console.error);
