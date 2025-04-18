// Copyright © SixtyFPS GmbH <info@slint.dev>
// SPDX-License-Identifier: GPL-3.0-only OR LicenseRef-Slint-Royalty-free-2.0 OR LicenseRef-Slint-Software-3.0

export interface EventTS {
    updatePropertiesCallback: {
        title: string;
        slintSnippet: string;
    };
    copyToClipboard: {
        result: boolean;
    };
}
