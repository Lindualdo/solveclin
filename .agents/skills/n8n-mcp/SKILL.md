---
name: n8n MCP Tools Expert
description: Technical expertise in utilizing n8n MCP tools for workflow discovery, validation, and editing.
---

# n8n MCP Tools Expert

These guidelines provide the technical standards for interacting with n8n using Model Context Protocol (MCP) tools, ensuring efficient node discovery and iterative workflow building.

## 1. Critical nodeType Formats

You must use the correct prefix depending on the tool being used:

- **Format 1: Search & Validate Tools** 
    - **Prefix**: `nodes-base.` (e.g., `nodes-base.slack`, `nodes-base.httpRequest`)
    - **Tools**: `search_nodes`, `get_node`, `validate_node`, `validate_workflow`.
- **Format 2: Workflow Modification Tools**
    - **Prefix**: `n8n-nodes-base.` (e.g., `n8n-nodes-base.slack`)
    - **Tools**: `n8n_create_workflow`, `n8n_update_partial_workflow`.

> [!IMPORTANT]
> `search_nodes` returns both `nodeType` (Format 1) and `workflowNodeType` (Format 2). Use them accordingly.

---

## 2. Unified Tool Usage Patterns

### Pattern 1: Node Discovery (Most Common)
1.  **Search**: `search_nodes({ query: "service_name" })` to find candidate nodes.
2.  **Get Details**: `get_node({ nodeType: "nodes-base.X", detail: "standard", includeExamples: true })`.
    - Always prefer `detail: "standard"` to keep token usage efficient while getting essential schema.

### Pattern 2: Iterative Workflow Editing
Don't attempt to build complex workflows in one call.
1.  **Add Trigger**: Add the starting node.
2.  **Add Actions**: Add subsequent nodes one by one.
3.  **Connect**: Connect nodes in separate operations.
4.  **Validate**: Run `n8n_validate_workflow` after every major configuration change.
5.  **Intent**: Always include the `intent` parameter in `n8n_update_partial_workflow` to document the change for the system.

### Pattern 3: Validation Loop
1.  **Validate**: `validate_node({ nodeType: "...", config: {...}, profile: "runtime" })`.
2.  **Fix**: Address errors (missing required fields, format mismatches).
3.  **Repeat**: Re-validate until `valid: true`.

---

## 3. Best Practices (✅ Do's & ❌ Don'ts)

### ✅ Do's
- **Explicit Profiles**: Use `profile: "runtime"` for standard node validation.
- **Informative Detail**: Use `includeExamples: true` in `get_node` to see real-world configuration samples.
- **Smart Parameters**: Use `branch` or `case` parameters when dealing with complex node choices.
- **Iterative Logic**: Average 56 seconds between edits is the benchmark for success.

### ❌ Don'ts
- **Token Waste**: Avoid `detail: "full"` in `get_node` unless you absolutely need the entire underlying schema.
- **One-Shot Failure**: Avoid building large workflows in a single `n8n_create_workflow` call; it is brittle and hard to debug.
- **Activation Omission**: Remember to explicitly activate the workflow (`activateWorkflow: true`) once building is complete.
