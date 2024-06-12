# CPRG-303 Project

This repository contains _Group 8_'s submission for the project of _CPRG-303_.

## Introduction

The application being developed is _SpendWise_, a simple personal expense tracking app featuring category management, monthly reports, and budgeting.

## Architecture decisions

This section documents architectural decisions made for the application aside from these 2 pre-determined decisions:

- Target devices: **Android**
- CSS framework: **Bootstrap**

### Development framework

#### Context

In selecting an appropriate development framework for our mobile application, we sought a solution that would enable rapid development, provide support for both Android and iOS platforms, and have a robust ecosystem.

#### Options considered

1. React Native
2. Flutter
3. Xamarin

#### Decision

React Native

#### Rationale

React Native offers a strong combination of performance, community support, and ease of use. It allows for cross-platform development, which, while our initial target is Android, opens the possibility of expanding to iOS with minimal additional effort. React Native also aligns with our team's existing JavaScript/React knowledge, reducing the learning curve and accelerating the development process.

#### Consequences

While React Native offers an extensive selection of libraries and tools, reliance on third-party libraries may introduce dependencies that need to be carefully managed.

#### Conclusion

React Native is a fitting choice for developing the _SpendWise_ application, enabling us to leverage our team's strengths and deliver a high-quality cross-platform app in an efficient manner.

### Navigation strategy

#### Context

A coherent and intuitive navigation strategy is critical for enhancing user experience in mobile applications, ensuring that users can easily access diverse features without confusion.

#### Options considered

1. React Navigation
2. Native navigation libraries

#### Decision

React Navigation

#### Rationale

React Navigation emerges as the preferred choice primarily due to its seamless integration with React Native, offering a JavaScript-based solution that is customizable and easy to implement within our development framework. It supports fundamental navigation patterns, like stacks and tabs, which are pivotal for structuring the _SpendWise_ application's interface components such as category management, expense tracking, and monthly reports.

#### Consequences

Adopting React Navigation might introduce performance overhead compared to native navigation solutions, particularly in complex scenarios with heavy navigation patterns. However, for the scope and scale of _SpendWise_, the ease of use, and integration benefits far outweigh the potential drawbacks.

#### Conclusion

React Navigation is selected to manage the application's navigation, given its compatibility with React Native, support for essential navigation patterns, and flexibility in handling diverse user flows within _SpendWise_.

### Hardware

#### Context

Considering the nature of _SpendWise_, certain hardware features of smart devices could be leveraged to enhance functionality and user satisfaction.

#### Options considered

1. Camera for scanning receipts
2. GPS for location-based categorization
3. None

#### Decision

None

#### Rationale

While integrating hardware features like the camera and GPS can enrich the app's capabilities, such as by adding the option to scan receipts or automize expense categorization based on the user's location, we have decided to streamline our focus towards refining the core features of expense tracking, budgeting, and reporting for the scope of this course project. This decision is also motivated by considerations of privacy, development time constraints, and the desire to maintain simplicity and ease of use.

#### Consequences

This decision simplifies the development process and minimizes potential privacy concerns. However, it also limits the application's feature set, potentially reducing the competitive edge _SpendWise_ might have had with more integrated hardware utilization.

#### Conclusion

For the initial version of _SpendWise_, we have opted not to incorporate direct hardware integrations, focusing instead on solidifying the core functionality and ensuring a robust, user-friendly experience.

### Database storage

#### Context

Selecting a suitable database storage option is crucial for ensuring efficient, persistent data storage and retrieval in mobile applications, particularly for functionalities such as tracking expenses, managing categories, and generating reports.

#### Options considered

1. SQLite
2. Firebase
3. Realm

#### Decision

SQLite

#### Rationale

SQLite is chosen due to its lightweight nature, zero-configuration, and serverless setup, which aligns well with the standalone nature of _SpendWise_. Being embedded into the application, it ensures quick, reliable access to data and offers a simpler integration path with React Native. This choice supports our goal of delivering a performant, self-contained application that efficiently manages, stores, and retrieves user data without necessitating external dependencies or internet connectivity.

#### Consequences

Opting for SQLite confines data access to the device, which may limit data recovery options should the device be lost or compromised. Moreover, as the application scales, careful consideration must be given to database schema design and management to maintain performance.

#### Conclusion

SQLite is the optimal database storage solution for _SpendWise_, meeting our requirements for a lightweight, reliable, and easily integrated database that supports the application's core functionalities of expense tracking and reporting.
