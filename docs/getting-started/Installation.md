---
sidebar_position: 2
---

# Install Procedure

1. Configure the Power Platform Environment for code components
2. Install the Creator Kit - requires August 2022 release pre-installed.

   [Get the Creator Kit Here](https://learn.microsoft.com/en-us/power-platform/guidance/creator-kit/overview)

   :::note
   September 2022 creator kit may fail to install if the August release is not installed first.
   :::

3. Download the latest managed solution zip file from [Accessible Apps Kit GitHub Releases Page](https://github.com/Trustmarque/Accessible-Apps-Kit/releases) should be called something like this: `AccessibleAppsKit_1.0.20221013.1.zip`
4. Import the Accessible Apps Kit solution to an environment with Dataverse database enabled

![Import Solution](./assets/import-solution.gif)

4. Copy the empty `icons.csv` to OneDrive.

5. Configure the Dataflow

![Configure Dataflow](./assets/configure-dataflow.gif)
