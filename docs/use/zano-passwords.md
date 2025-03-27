# Different Password Types in Zano Wallets

When managing Zano wallets, utilizing multiple password types enhances security and convenience. Each password serves a unique purpose:

## Wallet Password

- **Purpose:** This is the basic level of security for your Zano wallet file.
- **Use Case:**
  - If you run your Zano wallet on a remote server for staking, the wallet password protects the wallet file from unauthorized access.
  - When opening your wallet locally on a GUI wallet, the wallet password is required on the first launch. If the master password is enabled, the wallet password will be stored and not required for subsequent launches.

## Seed Phrase Password (Also Known as [Passphrase](/docs/use/seed-phrase.md))

- **Purpose:** Adds an additional layer of security.
- **Use Case:** For paper wallets stored offline, the seed phrase password (or passphrase) ensures that even if someone gains physical access to your Zano wallet, they cannot immediately compromise it.

## Master Password

- **Feature:** This is primarily a feature in Zano GUI wallets.
- **Benefit:**
  - Allows users to bypass entering individual wallet passwords every time they open the application, and it secures all GUI data, including secrets and ports that allow connections to the Zano browser extension.
  - Particularly useful for users operating multiple Zano wallets, as it eliminates the need to enter each wallet password repeatedly on every launch.
- **Convenience:** Simplifies access and enhances usability, especially when managing multiple wallets.

### Why Multiple Passwords?

- **Enhanced Security:** Each password layer adds a level of security that protects against different potential threats.
- **Convenience:** While managing multiple passwords may seem cumbersome, features like the master password provide convenience and ease of use, balancing security with user experience.

### Key Points

- **Security Best Practices:** It's crucial to use strong, unique passwords for each security layer.
- **Backup and Recovery:** Ensure all passwords and seed phrases are backed up in secure locations. Losing access to these could mean losing access to your Zano assets.
