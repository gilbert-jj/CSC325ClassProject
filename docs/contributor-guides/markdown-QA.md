# Using Vale
## Installation:

Vale is already configured in the DevContainer. To use it, ensure you are working within the DevContainer environment.
## Configuration:

Vale configuration is defined in the .vale.ini file located in the root of the repository. This file uses the Google Developer Documentation Style Guide, write-good supplementary styles, and MDX configurations.
## Usage:

### Before committing changes, run Vale to lint your markdown files:
vale .

Address any issues reported by Vale to ensure your markdown files meet the style and quality standards.
# Using markdownlint-cli
## Installation:

markdownlint-cli is also configured in the DevContainer. Ensure you are in the DevContainer environment to use it.
## Configuration:

The rules for markdownlint-cli are defined in the .markdownlint.json file in the root of the repository. Currently, the configuration disables the MD013 rule which checks for line-length.
## Usage:

### Run markdownlint-cli to check your markdown files:
markdownlint .

Fix any issues flagged by markdownlint-cli to ensure your files adhere to the markdown style guidelines.
Contribution Workflow
# Linting and Checking:

Always run both Vale and markdownlint-cli before pushing your changes.
Ensure all issues are resolved to maintain high-quality markdown documentation.
Commit and Push:

Once all issues are addressed, commit your changes and push them to the repository.
These guidelines help maintain a consistent and high standard of documentation in the repository. If you encounter any issues, refer to the documentation for Vale and markdownlint-cli.

For more details, refer to the configuration files and instructions in the contributor guides.
